const {sequelize} = require('./db')
const {Restaurant, Menu} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    });

    test('can create a Restaurant', async () => {
        // TODO - write test
        const testRestaurant = await Restaurant.create(seedRestaurant[0]);
        expect(testRestaurant).toEqual(expect.objectContaining(seedRestaurant[0]));
    });
    
    test('can create a Menu', async () => {
        // TODO - write test
        const testMenu = await Menu.create(seedMenu[0]);
        expect(testMenu).toEqual(expect.objectContaining(seedMenu[0]));
    });

    test('can find Restaurants', async () => {
        // TODO - write test
        const restaurants = await Restaurant.bulkCreate(seedRestaurant);
        const testFind = await Restaurant.findAll();
        expect(testFind[0]).toEqual(expect.objectContaining(seedRestaurant[0]));
    });

    test('can find Menus', async () => {
        // TODO - write test
        expect('NO TEST').toEqual('EXPECTED DATA')
    });

    test('can delete Restaurants', async () => {
        // TODO - write test
        expect('NO TEST').toEqual('EXPECTED DATA')
    });
})