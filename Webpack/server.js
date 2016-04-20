const serveWebpackClient = require('serve-webpack-client');
 
const app = express();
 
// configure your REST API routes here as normal. 
 
// Now set up the client to serve itself: 
app.use(serveWebpackClient({
  distPath: path.join(__dirname, '/dist'), // Used in prod 
  indexFileName: 'index.html',
  webpackConfig: require('/webpack.config') // Used for dev. 
}));
 
app.listen(3000);