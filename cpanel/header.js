if (void 0 !== PAGE.appGroups) {
    var itemsToRemove = {
            preferences: [
                ["feature", "setlang"],
                ["feature", "password"]
            ],
            files: [
                ["feature", "backup"]
            ],
            databases: [
                ["feature", "postgres"]
            ],
            email: [
                ["feature", "popaccts"],
                ["feature", "forwarders || emaildomainfwd"],
                ["feature", "email_filters"]
            ],
            metrics: [
                ["feature", "errlog"],
                ["feature", "rawlog"]
            ],
            software: [
                ["feature", "sitereptile"],
                ["feature", "attracta_seotips"]
            ],
            support: [
                ["file", "createticket"],
                ["file", "ShowTickets"],
                ["feature", "ShowTickets"]
            ]
        },
        itemsToUpdate = {
            databases: [{
                matchAttr: ["feature", "phpmyadmin"],
                newAttributes: [
                    ["target", ""]
                ],
                stripAttrsFromUrl: !0
            }],
            software: [{
                matchAttr: ["feature", "multiphp_configuration"],
                newAttributes: [
                    ["target", ""]
                ],
                stripAttrsFromUrl: !0
            }],
            support: [{
                matchAttr: ["feature", "cloudflare_analytics"],
                newAttributes: [
                    ["url", "https://wiki.freewebs.ml"]
                ]
            }]
        };
    for (h = PAGE.appGroups.length - 1; h >= 0; h--)
        if (appGroup = PAGE.appGroups[h], "soft_div" !== appGroup.group) {
            var removeFromGroup = itemsToRemove[appGroup.group],
                updateInGroup = itemsToUpdate[appGroup.group];
            for (i = appGroup.items.length - 1; i >= 0; i--) appItem = appGroup.items[i], void 0 !== removeFromGroup && removeFromGroup.forEach(function(t) {
                appItem[t[0]] === t[1] && appGroup.items.splice(i, 1)
            }), void 0 !== updateInGroup && updateInGroup.forEach(function(t) {
                appItem[t.matchAttr[0]] === t.matchAttr[1] && (t.newAttributes.forEach(function(t) {
                    appItem[t[0]] = t[1]
                }), t.stripAttrsFromUrl && (urlParts = appItem.url.split(" "), appItem.url = urlParts[0]))
            })
        } else PAGE.appGroups.splice(h, 1)
}