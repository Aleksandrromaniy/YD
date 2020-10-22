module.exports = {
    // The root of your source code, typically /src
    // `<rootDir>` is a token Jest substitutes
    roots: ["<rootDir>/src/tests"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    // Matches parent folder `tests` and filename
    // should contain `test` or `spec`.
    testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};