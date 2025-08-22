// This file mocks the global `contexts` object expected by @ellucian/experience-extension-utils
// so that Storybook stories using those hooks do not throw ReferenceError or TypeError.

import React from 'react';

if (typeof window !== 'undefined' && !window.contexts) {
    // The value to be returned by useContext(window.contexts.ExtensionContext)
    const extensionContextValue = {
        cache: {},
        cardInfo: {
            cardConfiguration: {
                customConfiguration: {}
            },
            cardId: "001G000000iHnvnIAC|Sample|CommonMatchingApp|CommonMatchingAppCard",
            serverConfigContext: {
                cardPrefix: "",
                api: "/api/card-server-configuration",
                suffixPattern: "<api>/<tenantId>/<cardPrefix><cardId>"
            }
        },
        data: {},
        experienceInfo: {},
        extensionControl: {},
        extensionInfo: {
            extensionId: "90877008-98c9-4293-9119-c4653175dfdc",
            configuration: {},
            basePath: "/uom12982test/page/001G000000iHnvnIAC/Sample/CommonMatchingApp/CommonMatchingAppCard/"
        },
        themeInfo: {
            dashboardBackgroundColor: "#195b05",
            primaryColor: "#1fb514",
            secondaryColor: "#49128b",
            ctaColors: {
                active: "#085739",
                base: "#00834F",
                hover: "#046D44",
                tint: "#F2F9F6"
            }
        },
        userInfo: {
            firstName: "David",
            roles: [
                "vendor",
                "BANNERINB",
                "006768378",
                "bcacedcd-5f35-456c-b842-dc713b285cd8"
            ],
            locale: "en-US",
            dir: "ltr",
            tenantId: "f9c86c80-e818-4d1b-9ca4-a203318c978f"
        },
        dashboardInfo: {
            erpType: "Banner",
            version: "1.93.0",
            history: {
                length: 5,
                action: "PUSH",
                location: {
                    pathname: "/page/001G000000iHnvnIAC/Sample/CommonMatchingApp/CommonMatchingAppCard/",
                    search: "",
                    hash: "",
                    key: "v5k86t"
                }
            },
            region: "ca-central-1",
            stage: "prodtestca"
        },
        cardControl: {},
        pageControl: {
            setPageTitle: () => {},
        },
        pageInfo: {
            basePath: "/uom12982test/page/001G000000iHnvnIAC/Sample/CommonMatchingApp/CommonMatchingAppCard/"
        }
    };

    window.contexts = {
        ExtensionContext: React.createContext(extensionContextValue)
    };

    // Patch useContext to always return our value for this context
    const realUseContext = React.useContext;
    React.useContext = function patchedUseContext(ctx) {
        if (ctx === window.contexts.ExtensionContext) {
            return extensionContextValue;
        }
        return realUseContext(ctx);
    };
}
