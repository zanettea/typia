import { createClientBenchmarkProgram } from "../createClientBenchmarkProgram";

createClientBenchmarkProgram(
    __dirname +
        "/../internal/fastify/benchmark-server-fastify-ArrayHierarchical" +
        __filename.substr(-3),
);
