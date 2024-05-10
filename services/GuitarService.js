class GuitarService {
	constructor(db) {
		this.client = db.sequelize;
		this.Guitar = db.Guitar;
		this.Color = db.Color;
		this.Make = db.Make;
		this.Model = db.Model;
	}

	async create(year, price, brandId, modelId, colorId) {
		return this.Guitar.create({
			year: year,
			price: price,
			BrandId: brandId,
			ModelId: modelId,
			ColorId: colorId,
		});
	}

	async get() {
		return this.Guitar.findAll({
			where: {},
		});
	}

	async getGuitarDetails(guitarId) {
		const guitar = await this.Guitar.findOne({
			where: {
				id: guitarId,
			},
		});
		return guitar;
	}

	async deleteGuitar(guitarId) {
		return this.Guitar.destroy({
			where: { id: guitarId },
		});
	}
}
module.exports = GuitarService;
