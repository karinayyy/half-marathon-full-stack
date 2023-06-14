const houseBlueprint = {
    getDaysToBuild() {
        return this.size / this._averageBuildSpeed;
    }
};

function HouseBuilder(address, description, owner, size, roomCount) {
    this.address = address;
    this.description = description;
    this.size = size;
    this.date = new Date();
    this.owner = owner;
    this._averageBuildSpeed = 0.5;
    this.roomCount = roomCount;
}

Object.assign(HouseBuilder.prototype, houseBlueprint);
