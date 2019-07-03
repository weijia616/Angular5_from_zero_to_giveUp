
(function (global) {
    var paths = {
        "rxjs/*": "node_modules/rxjs/bundle/Rx.min.js",
        "@angular/*": "node_modules/@angular/*"
    }

    var packages = {"app": {}};

    var angularModules = ["common", "compiler", "core",
        "platform-browser", "platform-browser-dynamic"];

    angularModules.forEach(function (pkg) {
        packages["@angular/" + pkg] = {
            main: "/bundle/" + pkg + ".umd.min.js"
        };
    });

    System.config({paths: paths, packages: packages});
})(this);