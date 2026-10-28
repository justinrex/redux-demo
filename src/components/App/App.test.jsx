import { act, render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { createDemoStore } from '../../store';
import HookLifecycle from '../LifeCycle/hooksSolution';
import HookRefs from '../Refs/hooksSolution';

function renderDemo(entries = ['/demo'], trackBreadCrumb) {
  const store = createDemoStore();
  const router = createMemoryRouter([{ path: '*', element: <App trackBreadCrumb={trackBreadCrumb} /> }], { initialEntries: entries });
  const view = render(<Provider store={store}><RouterProvider router={router} /></Provider>);
  return { ...view, store, router };
}

beforeEach(() => { document.title = 'Redux Demo'; });

test('redirects the root and updates shared state and the derived multiple', async () => {
  const user = userEvent.setup();
  const { store } = renderDemo(['/']);
  await user.click(await screen.findByRole('button', { name: 'Increment count' }));
  expect(screen.getByText('Clicked 1 time')).toBeInTheDocument();
  expect(screen.getByText('Count × 20: 20')).toBeInTheDocument();
  expect(store.getState().button.hover).toBe(1);
});

test('derives active navigation from deep links and browser history', async () => {
  const { router } = renderDemo(['/refs', '/lifecycle']);
  expect(screen.getByRole('link', { name: 'Lifecycle' })).toHaveAttribute('aria-current', 'page');
  await act(() => router.navigate(-1));
  expect(screen.getByRole('link', { name: 'Refs' })).toHaveAttribute('aria-current', 'page');
  expect(screen.getByRole('link', { name: 'Lifecycle' })).not.toHaveAttribute('aria-current');
});

test('updates and restores the document title when leaving the class example', async () => {
  const user = userEvent.setup();
  renderDemo(['/lifecycle']);
  const input = screen.getByRole('textbox', { name: 'Page title' });
  await user.clear(input);
  await user.type(input, 'New title');
  expect(document.title).toBe('New title');
  await user.click(screen.getByRole('link', { name: 'Demo' }));
  expect(document.title).toBe('Redux Demo');
});

test('focuses the class example input through its ref', async () => {
  const user = userEvent.setup();
  renderDemo(['/refs']);
  await user.click(screen.getByRole('button', { name: 'Focus input' }));
  expect(screen.getByRole('textbox', { name: 'Focus target' })).toHaveFocus();
});

test('provides a working hook-based focus alternative', async () => {
  const user = userEvent.setup();
  render(<HookRefs />);
  await user.click(screen.getByRole('button', { name: 'Focus input' }));
  expect(screen.getByRole('textbox', { name: 'Focus target' })).toHaveFocus();
});

test('restores the previous document title in the hook alternative', async () => {
  const user = userEvent.setup();
  const { unmount } = render(<HookLifecycle />);
  await user.type(screen.getByRole('textbox', { name: 'Page title' }), ' updated');
  expect(document.title).toBe('Lifecycle updated');
  unmount();
  expect(document.title).toBe('Redux Demo');
});

test('tracks tagged interactions without capturing typed key values', () => {
  const track = vi.fn();
  renderDemo(['/demo'], track);
  fireEvent.keyDown(screen.getByRole('button', { name: 'Increment count' }), { key: 'SecretKey' });
  expect(track).toHaveBeenCalledExactlyOnceWith({ element: 'IncrementButton', type: 'keydown' });
  fireEvent.keyDown(screen.getByRole('link', { name: 'Refs' }), { key: 'Enter' });
  expect(track).toHaveBeenCalledTimes(1);
});

test('shows a useful fallback for unknown routes', () => {
  renderDemo(['/missing']);
  expect(screen.getByRole('heading', { name: 'Page not found' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Back to the counter' })).toHaveAttribute('href', '/demo');
});
