exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions;

    if (page.path.match(/^\/play/)) {
        page.matchPath = "/play/*";
        createPage(page);
    }
}