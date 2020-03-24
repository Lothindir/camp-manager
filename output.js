/* config.module.rule('fonts') */
{
  test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
  use: [
    /* config.module.rule('fonts').use('url-loader') */
    {
      loader: 'E:\\Documenti\\WebstormProjects\\camp-manager\\node_modules\\url-loader\\dist\\cjs.js',
      options: {
        limit: 4096,
        fallback: {
          loader: 'E:\\Documenti\\WebstormProjects\\camp-manager\\node_modules\\file-loader\\dist\\cjs.js',
          options: {
            name: 'fonts/[name].[hash:8].[ext]'
          }
        }
      }
    }
  ]
}
