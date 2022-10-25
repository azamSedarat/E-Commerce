'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      userRole: {
        allowNull: false,
        defualtValue:"customer",
        type: Sequelize.ENUM("admin","customer","seller")
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      nationalityCode: {
        type: Sequelize.INTEGER
      },
      birthDay: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    // create table address
    await queryInterface.createTable('Addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      province: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      street: {
        type: Sequelize.STRING
      },
      plaque: {
        type: Sequelize.INTEGER
      },
      floor: {
        type: Sequelize.INTEGER
      },
      postalCode: {
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users',
          },
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

      // create table customer
      await queryInterface.createTable('Customers', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        UserId: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'Users',
            },
            key: 'id',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          }
        },
        credit: {
          type: Sequelize.INTEGER,
          defultValue: 0
        },
        paybackType: {
          type: Sequelize.ENUM("Deposit to wallet","Deposit to bank account."),
        },
        job: {
          type: Sequelize.STRING
        },
        customerType: {
          type: Sequelize.ENUM("person","company"),
          defaultValue:"person"
        },
        companyName: {
          type: Sequelize.STRING
        },
        financialNumber: {
          type: Sequelize.INTEGER
        },
        registerIdentity: {
          type: Sequelize.INTEGER
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });

      // create table seller
      await queryInterface.createTable('Sellers', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        UserId: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'Users',
            },
            key: 'id',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          }
        },
        qualify :{
          type: Sequelize.INTEGER
        },
        sellerType: {
          type: Sequelize.ENUM("person","store")
        },
        gender: {
          type: Sequelize.ENUM("male","female")
        },
        birthCertificateNumber: {
          type: Sequelize.INTEGER
        },
        storeName: {
          type: Sequelize.STRING
        },
        ibanNumber: {
          type: Sequelize.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });


      // create table Category

      await queryInterface.createTable("Categories", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING,
        },
        parentId : {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'Categories',
            },
            key: 'id',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          }
        },
        description: {
          type: Sequelize.TEXT,
        },
        feature: {
          type: Sequelize.ARRAY(Sequelize.STRING)
        },
        varientFeature: {
          type: Sequelize.ARRAY(Sequelize.STRING)
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      });

      // create table product
      await queryInterface.createTable('Products', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING
        },
        EnName: {
          type: Sequelize.STRING
        },
        feature: {
          type: Sequelize.JSONB
        },
        CategoryId: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'Categories',
            },
            key: 'id',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          }
        },
        review: {
          type: Sequelize.TEXT
        },
        expertReview: {
          type: Sequelize.TEXT
        },
        generalFeatures: {
          type: Sequelize.JSONB
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });

      // create table favoreitList
      await queryInterface.createTable('favoriteLists', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        CustomerId: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'Customers',
            },
            key: 'id',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          }
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });
      // create table favoreiteProduct
      await queryInterface.createTable('favoriteProducts', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        FavoriteListId: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'favoriteLists',
            },
            key: 'id',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          }
        },
        ProductId: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'Products',
            },
            key: 'id',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          }
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });

      // create table payment
      await queryInterface.createTable('Payments', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        UserId: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'Users',
            },
            key: 'id',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          }
        },
        ID:{
          type:Sequelize.STRING
        },
        link: {
          type:Sequelize.STRING
        },
        amount:{
          allowNull:true,
          type:Sequelize.INTEGER
        },
        paymentDate:{
            allowNull:false,
            type:Sequelize.DATE
        },
        description:{
            allowNull:true,
            type:Sequelize.STRING
        },
        status:{
            allowNull:true,
            type:Sequelize.ENUM(["PaymentComplete",
                "PaymentDeclined",
                "PaymentDue",
                "PaymentPastDue"])
        },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
          }
        });

      // create table productFeatures
      await queryInterface.createTable('ProductFeatures', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        ProductId: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'Products',
              as : "features"
            },
            key: 'id',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          }
        },
        varientFeature: {
          type: Sequelize.JSONB
        },
        photo: {
          type: Sequelize.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });

      // create table productSeller
      await queryInterface.createTable('ProductSellers', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        ProductFeatureId: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'ProductFeatures',
            },
            key: 'id',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          }
        },
        SellerId: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'Sellers',
            },
            key: 'id',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          }
        },
        warranty: {
          type: Sequelize.STRING
        },
        price:{
          type : Sequelize.INTEGER
        },
        stock: {
          type: Sequelize.INTEGER
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });

      // create table withDraw
      await queryInterface.createTable('withDraws', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        SellerId: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'Sellers',
            },
            key: 'id',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          }
        },
        date: {
          type: Sequelize.DATE
        },
        amount: {
          type: Sequelize.INTEGER
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });

      // create table cart
      await queryInterface.createTable('Carts', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        CustomerId: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'Customers',
            },
            key: 'id',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          }
        },
        status: {
          type: Sequelize.ENUM("open","PaymentProcessing","canceled","closed")
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });

      // create table cartItems
      await queryInterface.createTable('CartItems', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        CartId: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'Carts',
            },
            key: 'id',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          }
        },
        ProductFeatureId: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'ProductFeatures',
            },
            key: 'id',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          }
        },
        quantity: {
          type: Sequelize.INTEGER
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });

      // create table comment
      await queryInterface.createTable('Comments', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        ProductFeatureId: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'ProductFeatures',
            },
            key: 'id',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          }
        },
        customerId: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'Customers',
            },
            key: 'id',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          }
        },
        insertDate: {
          type: Sequelize.DATE
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });

      // create table order
      await queryInterface.createTable('Orders', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        CustumerId: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'Customers',
            },
            key: 'id',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          }
        },
          AddressId: {
            type: Sequelize.INTEGER,
            references: {
              model: {
                tableName: 'Addresses',
              },
              key: 'id',
              onUpdate: 'CASCADE',
              onDelete: 'CASCADE'
            }
          },
          CartId: {
            type: Sequelize.INTEGER,
            references: {
              model: {
                tableName: 'Carts',
              },
              key: 'id',
              onUpdate: 'CASCADE',
              onDelete: 'CASCADE'
            }
          },
          PaymentId: {
            type: Sequelize.INTEGER,
            references: {
              model: {
                tableName: 'Payments',
              },
              key: 'id',
              onUpdate: 'CASCADE',
              onDelete: 'CASCADE'
            }
          },
        shippedDate: {
          type: Sequelize.DATE
        },
        amount:{
          allowNull:false,
          type:Sequelize.INTEGER
      },
        paymentMethod:{
          allowNull:false,
          type: Sequelize.ENUM(["online", "cash","credit"])
  
      },
      description:{
          allowNull:true,
          type:Sequelize.STRING
      },
      orderDate:{
          allowNull:false,
          type:Sequelize.DATE
      },
      orderStatus:{
          allowNull:false,
          type:Sequelize.ENUM([
              "OrderCancelled",
              "OrderDelivered",
              "OrderInTransit",
              "OrderPaymentDue",
              "OrderPickupAvailable",
              "OrderProblem",
              "OrderProcessing",
              "OrderReturned"])
      },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
    await queryInterface.dropTable('Addresses');
    await queryInterface.dropTable('Customers');
    await queryInterface.dropTable('Sellers');
    await queryInterface.dropTable("Categories");
    await queryInterface.dropTable('Products');
    await queryInterface.dropTable('favoriteLists');
    await queryInterface.dropTable('Payments');
    await queryInterface.dropTable('ProductFeatures');
    await queryInterface.dropTable('ProductSellers');
    await queryInterface.dropTable('withDraws');
    await queryInterface.dropTable('Carts');
    await queryInterface.dropTable('CartItems');
    await queryInterface.dropTable('Comments');
    await queryInterface.dropTable('Orders');
  }
};