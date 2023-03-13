module.exports = () => {
    const rewrites = () => {
        return [
            {
                source: "/testHello/:path*",
                destination: "http://localhost:5000/testHello/:path*",
            },
            {
                source: "/testPrompt/:path*",
                destination: "http://localhost:5000/testPrompt/:path*",
            },
            {
                source: "/testParams:path*",
                destination: "http://localhost:5000/testParams",
            },
            {
                source: "/testMultiRouter/:path*",
                destination: "http://localhost:5000/testMultiRouter/:path*",
            },
        ];
    };
    return {
        rewrites,
    };
};