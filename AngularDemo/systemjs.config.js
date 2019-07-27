
(function (global) {
    // var paths = {
    //     "rxjs/*": "node_modules/rxjs/bundles/Rx.min.js",
    //     "@angular/*": "node_modules/@angular/*"
    // };
    //
    // var packages = {"app": {}};
    //
    // var angularModules = ["common", "compiler", "core",
    //     "platform-browser", "platform-browser-dynamic", "forms"];
    //
    // angularModules.forEach(function (pkg) {
    //     packages["@angular/" + pkg] = {
    //         main: "/bundles/" + pkg + ".umd.min.js"
    //     };
    // });
    //
    // System.config({paths: paths, packages: packages});
    System.config({
        paths: {
            "rxjs/*": "node_modules/rxjs/bundles/Rx.min.js",
            "@angular/*": "node_modules/@angular/*",
        },
        packages: {
            "@angular/common": {
                main: "/bundles/common.umd.min.js"
            },
            "@angular/compiler": {
                main: "/bundles/compiler.umd.min.js"
            },"@angular/core": {
                main: "/bundles/core.umd.min.js"
            },"@angular/platform-browser": {
                main: "/bundles/platform-browser.umd.min.js"
            },"@angular/platform-browser-dynamic": {
                main: "/bundles/platform-browser-dynamic.umd.min.js"
            },"@angular/forms": {
                main: "/bundles/forms.umd.min.js"
            },
            "app": {
                defaultExtension: 'js',
                // meta: {
                //     './*.js': {
                //         loader: 'systemjs-angular-loader.js'
                //     }
                // }
            },
            "rxjs": {
                main: "bundles/Rx.min.js",
                defaultExtension: "js",
            }
        },
        map: {
            // "app": "/components",
            "rxjs": "../node_modules/rxjs",
        },
    })
})(this);