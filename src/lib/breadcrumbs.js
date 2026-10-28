const query = `mutation TrackBreadCrumb($element: String!, $type: String!) {
  createBreadCrumb(element: $element, type: $type) { _id }
}`;

export function createBreadcrumbTracker(endpoint, fetchImpl = fetch) {
  return async ({ element, type }) => {
    if (!endpoint || !element || !type) return false;
    try {
      const response = await fetchImpl(endpoint, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        credentials: 'omit',
        signal: AbortSignal.timeout(5000),
        body: JSON.stringify({ query, variables: { element, type } }),
      });
      if (!response.ok) return false;
      const result = await response.json();
      return !result.errors?.length && Boolean(result.data?.createBreadCrumb?._id);
    } catch {
      return false;
    }
  };
}
