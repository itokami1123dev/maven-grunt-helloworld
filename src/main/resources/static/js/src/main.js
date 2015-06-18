import "babelify/polyfill"; // Needed for Babel's experimental features.

import App from './components/App.jsx';

React.render(
    <App />,
    document.getElementById('container')
);

