export default {
    ignore: ['README.md', 'changelog.md', 'code_of_conduct.md', 'contributing.md', 'license.md'],
    typescript: true,
    htmlContext: {
        head: {
            links: [
                {
                    rel: "stylesheet",
                    href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                }
            ]
        }
    }
}