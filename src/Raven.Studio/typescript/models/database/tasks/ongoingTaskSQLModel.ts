﻿/// <reference path="../../../../typings/tsd.d.ts"/>
import ongoingTask = require("models/database/tasks/ongoingTaskModel"); 

class ongoingTaskSQLModel extends ongoingTask {

    destinationServer = ko.observable<string>();
    destinationDatabase = ko.observable<string>();
    destinationDatabaseText: KnockoutComputed<string>;

    constructor(dto: Raven.Server.Web.System.OngoingSqlEtl) {
        super();
        this.initializeObservables();
        this.update(dto);
    }

    initializeObservables() {
        super.initializeObservables();
        // ...
        this.destinationDatabaseText = ko.pureComputed(() => {
            return `(${this.destinationDatabase()})`;
        });
    }

    update(dto: Raven.Server.Web.System.OngoingSqlEtl) {
        super.update(dto);
        this.destinationServer(dto.DestinationServer);
        this.destinationDatabaseText(dto.DestinationDatabase);
    }

    editTask() {
        // TODO...
    }
}

export = ongoingTaskSQLModel;
