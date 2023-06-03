/** README
 * 
 * settings that use jest with typescript and esbuild
 * 
 * env:
 * node
 * 
 * lib:
 * typescript
 * ts-jest
 * esbuild-jest
 * @types/jest
 * jest
 */

/** @type {import("ts-jest/dist/types").JestConfigWithTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    transform: {
        "^.+\\.tsx?$": "esbuild-jest"
    },
    roots: ["<rootDir>/src"]
};