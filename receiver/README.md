# Shopware 5 integration

* clone theme based on responsive theme (if not already done)
* admin panel -> configuration -> theme manager -> select theme -> configure theme -> configuration tab -> additional javascript libraries

```
USE THIS ONE FOR TESTING
<script src="https://testing-frontend.footprinttech.de/index.js"></script>
```

```
USE THIS ONE FOR CLIENTS IN PRODUCTION
<script src="https://production-frontend.footprinttech.de/index.js"></script>
```

* add frontend/detail/buy.tpl and frontend/index/index.tpl
  
content index.tpl

```
{extends file='parent:frontend/index/index.tpl'}

{* Include footprinttech app *}
{block name="frontend_index_header_javascript_jquery_lib" append}
    <script type="text/javascript">
        document.asyncReady(function () {
            if (window.footprinttechAppInstance) {
                window.footprinttechAppInstance.onAddToCart(function(size) {
                    window.footprinttechAppInstance.addToCart(size, $);
                })
            }
        });
    </script>
{/block}
```

* <YOURSHOP_ROOT>/themes/Frontend/\<YOURTHEME>/frontend/detail/buy.tpl

content buy.tpl

```
{extends file='parent:frontend/detail/buy.tpl'}

{block name="frontend_detail_buy_button_container_outer" prepend}
    <div id="footprinttech-button"></div>
    <div id="footprinttech-app"></div>

    {block name="frontend_index_header_javascript"}
      <script type="text/javascript">
      var renderCtaButton = function() {ldelim}
        var sConfigurator = {$sArticle.sConfigurator|json_encode};
        if (window.footprinttechAppInstance) {
          window.footprinttechAppInstance.createAddToCartMethods(sConfigurator);
          window.footprinttechAppInstance.renderCtaButton('footprinttech-button');
          return;
        }
        if (!window.FootprinttechApp) {
          console.error('cannot find footprinttechapp');
          return;
        }
        window.footprinttechAppInstance = new window.FootprinttechApp({
          domId: 'footprinttech-app',
          customerId: 'XXX',
          apiKey: 'XXXXX',
          shopType: 'shopware',
          articleNumber: '{$sArticle.mainVariantNumber}',
          articleName: '{$sArticle.articleName}'
        }, sConfigurator);
        window.footprinttechAppInstance.renderCtaButton('footprinttech-button');
      {rdelim}
      if (document.readyState === "complete"
       || document.readyState === "loaded"
       || document.readyState === "interactive") {
           renderCtaButton();
       } else {
          document.addEventListener("DOMContentLoaded", function() {
              renderCtaButton();
          });
       }
      </script>
    {/block}
{/block}
```
