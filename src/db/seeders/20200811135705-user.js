'use strict';

const createdAt = new Date()
const updatedAt = new Date()

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    // return queryInterface.bulkInsert(
    //   'Users',
    //   [
    //     {
    //       name: 'user 1',
    //       createdAt,
    //       updatedAt
    //     },
    //     {
    //       name: 'user 2',
    //       createdAt,
    //       updatedAt
    //     },
    //     {
    //       name: 'user 3',
    //       createdAt,
    //       updatedAt
    //     }
    //   ],
    //   {}
    // );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
