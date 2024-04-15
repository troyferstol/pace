"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.issuingOfficer = void 0;
exports.issuingOfficer = {
    slug: "issuingOfficer",
    admin: {
        useAsTitle: "issuingOfficer",
        // defaultColumns: ["email", "surname", "localGovernment", "firstName"],
        hideAPIURL: false,
        description: "Add the issuing officer",
    },
    access: {
        read: function (_a) {
            var user = _a.req.user;
            return user.role === "user" || user.role === "admin";
        },
        update: function (_a) {
            var user = _a.req.user;
            return user.role === "user" || user.role === "admin";
        },
        delete: function (_a) {
            var user = _a.req.user;
            return user.role === "admin";
        },
        create: function (_a) {
            var user = _a.req.user;
            return user.role === "user" || user.role === "admin";
        },
    },
    fields: [
        {
            name: "issuingOfficer",
            label: "issuing officer",
            type: "text",
            required: true,
        },
    ],
};
