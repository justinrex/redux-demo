import { createBreadcrumbTracker } from './breadcrumbs';

const event = { element: 'IncrementButton', type: 'keydown' };

test('does not send requests when tracking is disabled or untagged', async () => {
  const fetch = vi.fn();
  expect(await createBreadcrumbTracker('', fetch)(event)).toBe(false);
  expect(await createBreadcrumbTracker('/graphql', fetch)({ type: 'keydown' })).toBe(false);
  expect(fetch).not.toHaveBeenCalled();
});

test('sends only a tagged interaction through the breadcrumb mutation', async () => {
  const fetch = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ data: { createBreadCrumb: { _id: '123' } } }) });
  expect(await createBreadcrumbTracker('/graphql', fetch)(event)).toBe(true);
  const [url, request] = fetch.mock.calls[0];
  expect(url).toBe('/graphql');
  expect(JSON.parse(request.body).variables).toEqual(event);
  expect(request.credentials).toBe('omit');
  expect(request.signal).toBeInstanceOf(AbortSignal);
});

test.each([
  { ok: false },
  { ok: true, json: async () => ({ errors: [{ message: 'offline' }] }) },
  { ok: true, json: async () => ({ data: {} }) },
])('drops unsuccessful responses without breaking the lesson', async response => {
  expect(await createBreadcrumbTracker('/graphql', vi.fn().mockResolvedValue(response))(event)).toBe(false);
});

test('handles network failures without an unhandled rejection', async () => {
  expect(await createBreadcrumbTracker('/graphql', vi.fn().mockRejectedValue(Error('offline')))(event)).toBe(false);
});
