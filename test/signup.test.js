const axios = require("axios");

describe("API Routes", () => {
    describe("GET /", () => {
      // - should have a 200 status code
      it("should have a 200 status code", async () => {
        // make a get request & capture the response
        const { status } = await axios.get("/");
        // expect the response.status to be 200
        expect(status).toBe(200);
      });
    }),
    describe("GET /api/users", () => {
        it("it should return an array of resevation objects", async () => {
            const { data } = await axios.get("/api/users");
            const isArray = Array.isArray(data);
            const isObject = typeof data[0] === "object";
        })

    })
})