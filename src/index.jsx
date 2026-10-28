import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';
import store from './store';
import { createBreadcrumbTracker } from './lib/breadcrumbs';

const trackBreadCrumb = createBreadcrumbTracker(import.meta.env.VITE_BREADCRUMB_ENDPOINT);

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App trackBreadCrumb={trackBreadCrumb} />
    </Provider>
  </BrowserRouter>,
);
