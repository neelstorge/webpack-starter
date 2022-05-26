//index.js is the entry point for the application.
const features = import(/* webpackChunkName: "GetMessageFeature" */'./feature');

features.then((feature) => {
    document.body.innerText = `Awesome It worked.. Happy Learning !! ${feature.getMessage("Neel")}`;
})

