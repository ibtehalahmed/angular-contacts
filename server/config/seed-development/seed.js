/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

import Shop from '../../api/shop/shop.model.js';
import ShopAdmin from '../../api/shopAdmin/shopAdmin.model.js';
import Product from '../../api/product/product.model.js';
import ProductSales from '../../api/productSales/productSales.model.js';
import Comment from '../../api/comment/comment.model.js';

Shop.find({_id: {$in: ['568d21fd5acff0f0112c3d10']}}).removeAsync()
  .then(()=> {
    Shop.createAsync({
      _id: '568d21fd5acff0f0112c3d10',
      name: 'Silver Store',
      nameAr: 'محل فضيات',
      welcomeMsg: 'welcome Silver Store sdfsdf',
      welcomeMsgAr: 'مرحبا',
      about: 'buy silver products',
      aboutAr: 'بيع فضيات',
      user: '568908af9839e95403f943c9',
      pictureUrl: 'https://arzaq.s3.amazonaws.com/Shops/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbWciOiJpbWFnZSIsImlhdCI6MTQ1NTc4NzgyNH0.ZdyyNHoyiY5vlogFfrn2vz5B5Esh9obDS6BdrNFagzk.png',
      pictureBannerUrl: 'https://s3-us-west-2.amazonaws.com/arzaq/Shops/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbWciOiJpbWFnZSIsImlhdCI6MTQ1NjI0NzI0OH0.MGr2MtePvx5JtggUcNjjuJjhUN_0-NxoYNPGIFQHilX.png',
      address: {"country": "Egypt", "city": "Cairo", "details": "helmy", "zipCode": "sdfsd"},
      shopAdmin: '56b9cb7fdcdb24241feab823',
      urlName: 'SilverStore',
      countRates: 3,
      quantityRates: 10,
      ratePercentage: 66.7,
    });
  });

ShopAdmin.find().removeAsync()
  .then(()=> {
    ShopAdmin.createAsync({
      _id: '56b9cb7fdcdb24241feab823',
      country: 'Egypt',
      city: 'Cairo',
      detail: 'Dokki',
      zipCode: '11588',
      phone: '464564546'
    });
  });


Product.find({
    _id: {
      $in: ['56af5f80b2b921041256ed09', '56af5ff7b2b921041256ed0b', '56af60afb2b921041256ed0d',
        '56af615bb2b921041256ed0f', '56af61afb2b921041256ed11', '56af61f3b2b921041256ed13',
        '56af6225b2b921041256ed15', '56d5b86fdef8cc9c10fc716c', '56d5b86fdef8cc9c10fc716e']
    }
  })
  .removeAsync()
  .then(()=> {
    Product.createAsync(
      {
        _id: '56af5f80b2b921041256ed09',
        name: 'Silver Product 1',
        nameAr: 'منتج فضي الاول',
        pictureUrls: ['https://arzaq.s3.amazonaws.com/Products/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbWciOiJpbWFnZSIsImlhdCI6MTQ1NDMzMzgyNH0.s5UbiD26RuSQLTyHZ03AZACmuROHQd5r09cambin7aI.png'],
        price: 200,
        discount: 10,
        seller: '568d27a06b7cf40804147c23',
        quantity: 50,
        description: 'Silver and Crescent Charm adorned with Diamonds',
        descriptionAr: 'منتج فضي مرصع بالاحجار',
        duration: '568e4fd8f5fa62d00204f082',
        discountDuration: 5,
        eligibility: '568e4fd8f5fa62d00204f083',
        deliveryDurationOfCustomization: '568e4fd8f5fa62d00204f082',
        priceOfCustomization: 10,
        customizable: true,
        user: '568908af9839e95403f943c9',
        status: '569fa63e345dbd9811fe2e6a',
        creationDate: '2016-02-01T13:37:04.058Z',
        lastUpdate: '2016-02-01T13:37:04.058Z',
        reviewDate: '2016-02-01T13:48:35.288Z',
        reviewMsg: '',
        category: '56ae2c54ca6a6ae020d4dbc2',
        countRates: 3,
        quantityRates: 10,
        ratePercentage: 66.7,
        tags: ["helmy", "ahmed", "kamal", "hosny"],
        code: '1',
        colors: [{
          "name": "Yellow",
          "Hex": "#FCE883",
          "family": "yellow",
          "familyHex": "#FCE883"
        },
          {
            "name": "Blue Green",
            "Hex": "#199EBD",
            "family": "Blue",
            "familyHex": "#1F75FE"
          }],
        material: ['56d427abf86901d007716c78', '56d427abf86901d007716c75']
      },
      {
        _id: '56af5ff7b2b921041256ed0b',
        name: 'Silver Product 2',
        nameAr: 'منتج فضي الثاني',
        pictureUrls: ['https://arzaq.s3.amazonaws.com/Products/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbWciOiJpbWFnZSIsImlhdCI6MTQ1NDMzMzk0M30.i6GMyp-DYPgUIfu-xftXi7F0rJBpPIYCu1fKmgA6GFQ.png'],
        price: 50,
        discount: 20,
        seller: '568d27a06b7cf40804147c24',
        quantity: 60,
        description: 'Silver and Crescent Charm adorned with Diamonds',
        descriptionAr: 'منتج فضي مرصع',
        duration: '568e4fd8f5fa62d00204f084',
        eligibility: '568e4fd8f5fa62d00204f082',
        customizable: false,
        user: '568908af9839e95403f943c9',
        status: '569fa63e345dbd9811fe2e6a',
        creationDate: '2016-02-01T13:42:07.092Z',
        lastUpdate: '2016-02-01T13:42:07.092Z',
        reviewDate: '2016-02-01T13:48:41.856Z',
        reviewMsg: '',
        category: '56ae2c54ca6a6ae020d4dbc2',
        countRates: 2,
        quantityRates: 9,
        ratePercentage: 90,
        code: '2',
        colors: [{
          "name": "Yellow",
          "Hex": "#FCE883",
          "family": "yellow",
          "familyHex": "#FCE883"
        },
          {
            "name": "Blue Green",
            "Hex": "#199EBD",
            "family": "Blue",
            "familyHex": "#1F75FE"
          }],
        material: ['56d427abf86901d007716c76']
      },
      {
        _id: '56af60afb2b921041256ed0d',
        name: 'Silver Product 3',
        nameAr: 'مننج فضي الثالث',
        pictureUrls: ['https://arzaq.s3.amazonaws.com/Products/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbWciOiJpbWFnZSIsImlhdCI6MTQ1NDMzNDEyN30.-qiV3PebFD1XsG1l1rK_N_CBp5-0cBITA9n7_CDJHbw.png'],
        price: 150,
        discount: 15,
        seller: '568d27a06b7cf40804147c24',
        quantity: 0,
        description: 'Silver and Crescent Charm adorned with Diamonds',
        descriptionAr: 'منتج فضي ممتاز',
        duration: '568e4fd8f5fa62d00204f082',
        discountDuration: 0,
        eligibility: '568e4fd8f5fa62d00204f083',
        deliveryDurationOfCustomization: '568e4fd8f5fa62d00204f082',
        priceOfCustomization: 30,
        customizable: true,
        user: '568908af9839e95403f943c9',
        status: '569fa63e345dbd9811fe2e6a',
        creationDate: '2016-02-01T13:42:07.092Z',
        lastUpdate: '2016-02-01T13:42:07.092Z',
        reviewDate: '2016-02-01T13:48:41.856Z',
        reviewMsg: '',
        category: '56ae2c54ca6a6ae020d4dbc2',
        countRates: 100,
        quantityRates: 350,
        ratePercentage: 70,
        code: '3',
        colors: [{
          "name": "Yellow",
          "Hex": "#FCE883",
          "family": "yellow",
          "familyHex": "#FCE883"
        }],
        material: ['56d427abf86901d007716c78']
      },
      {
        _id: '56af615bb2b921041256ed0f',
        name: 'Silver Product 4',
        nameAr: 'منتج فضي الرابع',
        pictureUrls: ['https://arzaq.s3.amazonaws.com/Products/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbWciOiJpbWFnZSIsImlhdCI6MTQ1NDMzNDI5OX0._70WzmAq8rJDmmUWPXHzJF0diIsTLDiopLSZzX1v004.png'],
        price: 650,
        discount: 40,
        seller: '568d27a06b7cf40804147c24',
        quantity: 20,
        description: 'Silver and Crescent Charm adorned with Diamonds',
        descriptionAr: 'منتج فضي مرصع بالالماس',
        duration: '568e4fd8f5fa62d00204f084',
        discountDuration: 0,
        eligibility: '568e4fd8f5fa62d00204f082',
        deliveryDurationOfCustomization: '568e4fd8f5fa62d00204f083',
        priceOfCustomization: 1000,
        customizable: true,
        user: '568908af9839e95403f943c9',
        status: '569fa63e345dbd9811fe2e6a',
        creationDate: '2016-02-01T13:44:59.797Z',
        lastUpdate: '2016-02-01T13:44:59.797Z',
        reviewDate: '2016-02-01T13:48:46.122Z',
        reviewMsg: '',
        category: '56ae2c54ca6a6ae020d4dbc2',
        countRates: 6,
        quantityRates: 20,
        ratePercentage: 66.7,
        code: '4',
        colors: [
          {
            "name": "Blue",
            "Hex": "Blue",
            "family": "Blue",
            "familyHex": "Blue"
          }, {
            "name": "Yellow",
            "Hex": "#FCE883",
            "family": "yellow",
            "familyHex": "#FCE883"
          }],
        material: ['56d427abf86901d007716c76', '56d427abf86901d007716c77']
      },
      {
        _id: '56af61afb2b921041256ed11',
        name: 'Silver Product 5',
        nameAr: 'منتج فضي الخامس',
        pictureUrls: ['https://arzaq.s3.amazonaws.com/Products/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbWciOiJpbWFnZSIsImlhdCI6MTQ1NDMzNDM4M30.aY79giK2Kn-AkcxsCnAQzFvyS6h-FlE1YBPdV_mCgmo.png'],
        price: 250,
        discount: 70,
        seller: '568d27a06b7cf40804147c24',
        quantity: 60,
        description: 'Silver and Crescent Charm adorned with Diamonds',
        descriptionAr: '',
        duration: '568e4fd8f5fa62d00204f082',
        eligibility: '568e4fd8f5fa62d00204f083',
        customizable: false,
        user: '568908af9839e95403f943c9',
        status: '569fa63e345dbd9811fe2e6a',
        creationDate: '2016-02-01T13:46:23.732Z',
        lastUpdate: '2016-02-01T13:46:23.732Z',
        reviewDate: '2016-02-01T13:48:50.863Z',
        reviewMsg: '',
        category: '56ae2c54ca6a6ae020d4dbc1',
        countRates: 0,
        quantityRates: 0,
        code: '5',
        colors: [{
          "name": "Yellow",
          "Hex": "#FCE883",
          "family": "yellow",
          "familyHex": "#FCE883"
        }],
        material: ['56d427abf86901d007716c74', '56d427abf86901d007716c75']
      },
      {
        _id: '56af61f3b2b921041256ed13',
        name: 'Silver Product 6',
        nameAr: 'منتج فضي السادس',
        pictureUrls: ['https://arzaq.s3.amazonaws.com/Products/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbWciOiJpbWFnZSIsImlhdCI6MTQ1NDMzNDQ1MX0.kar_gU8QceDl6aRTVsArCxB0CSAhOybopcFnFWOC_ao.png'],
        price: 120,
        discount: 20,
        seller: '568d27a06b7cf40804147c24',
        quantity: 30,
        description: 'Silver and Crescent Charm adorned with Diamonds',
        descriptionAr: '',
        duration: '568e4fd8f5fa62d00204f082',
        discountDuration: 0,
        eligibility: '568e4fd8f5fa62d00204f083',
        deliveryDurationOfCustomization: '568e4fd8f5fa62d00204f082',
        priceOfCustomization: 10,
        customizable: true,
        user: '568908af9839e95403f943c9',
        status: '569fa63e345dbd9811fe2e6a',
        creationDate: '2016-02-01T13:47:31.424Z',
        lastUpdate: '2016-02-01T13:47:31.424Z',
        reviewDate: '2016-02-01T13:48:54.009Z',
        reviewMsg: '',
        category: '56ae2c54ca6a6ae020d4dbc1',
        countRates: 0,
        quantityRates: 0,
        code: '6',
        colors: [{
          "name": "Yellow",
          "Hex": "#FCE883",
          "family": "yellow",
          "familyHex": "#FCE883"
        }],
        material: ['56d427abf86901d007716c78']
      },
      {
        _id: '56af6225b2b921041256ed15',
        name: 'Silver Product 7',
        nameAr: 'منتج فضي السابع',
        pictureUrls: [
          'https://arzaq.s3.amazonaws.com/Products/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbWciOiJpbWFnZSIsImlhdCI6MTQ1NDMzNDUwMX0.wRdn5xSRobY78E3eiLGCnq7KpFilL9PjiLpkMvyCtxg.png',
          'https://arzaq.s3.amazonaws.com/Products/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbWciOiJpbWFnZSIsImlhdCI6MTQ1NDMzNDUwMX0.wRdn5xSRobY78E3eiLGCnq7KpFilL9PjiLpkMvyCtxZ.png',
          'https://arzaq.s3.amazonaws.com/Products/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbWciOiJpbWFnZSIsImlhdCI6MTQ1NDMzNDQ1MX0.kar_gU8QceDl6aRTVsArCxB0CSAhOybopcFnFWOC_ao.png'],
        price: 260,
        discount: 34,
        seller: '568d27a06b7cf40804147c24',
        quantity: 80,
        description: 'Silver and Crescent Charm adorned with Diamonds',
        descriptionAr: 'منتج فضي مرصع بالاحجار',
        duration: '568e4fd8f5fa62d00204f082',
        discountDuration: 0,
        eligibility: '568e4fd8f5fa62d00204f083',
        deliveryDurationOfCustomization: '568e4fd8f5fa62d00204f082',
        priceOfCustomization: 100,
        customizable: true,
        user: '568908af9839e95403f943c9',
        status: '569fa63e345dbd9811fe2e6a',
        creationDate: '2016-02-01T13:48:21.106Z',
        lastUpdate: '2016-02-01T13:48:21.106Z',
        reviewDate: '2016-02-01T13:48:58.009Z',
        reviewMsg: '',
        category: '56ae2c54ca6a6ae020d4dbc1',
        countRates: 0,
        quantityRates: 0,
        code: '7',
        colors: [{
          "name": "Yellow",
          "Hex": "#FCE883",
          "family": "yellow",
          "familyHex": "#FCE883"
        }],
        material: ['56d427abf86901d007716c76']
      },
      {
        _id: '56d5b86fdef8cc9c10fc716c',
        name: 'Silver Product 8',
        nameAr: 'منتج فضي السابع',
        pictureUrls: ['https://arzaq.s3.amazonaws.com/Products/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbWciOiJpbWFnZSIsImlhdCI6MTQ1NDMzNDUwMX0.wRdn5xSRobY78E3eiLGCnq7KpFilL9PjiLpkMvyCtxg.png'],
        price: 549,
        discount: 40,
        seller: '568d27a06b7cf40804147c24',
        quantity: 80,
        description: 'Silver and Crescent Charm adorned with Diamonds',
        descriptionAr: 'منتج فضي مرصع بالاحجار',
        duration: '568e4fd8f5fa62d00204f082',
        discountDuration: 0,
        eligibility: '568e4fd8f5fa62d00204f083',
        deliveryDurationOfCustomization: '568e4fd8f5fa62d00204f082',
        priceOfCustomization: 90,
        customizable: true,
        user: '568908af9839e95403f943c9',
        status: '569fa63e345dbd9811fe2e6a',
        creationDate: '2016-02-01T13:48:21.106Z',
        lastUpdate: '2016-02-01T13:48:21.106Z',
        reviewDate: '2016-02-01T13:48:58.009Z',
        reviewMsg: '',
        category: '56ae2c54ca6a6ae020d4dbc1',
        countRates: 5,
        quantityRates: 20,
        ratePercentage: 80,
        code: '8',
        colors: [{
          "name": "Yellow",
          "Hex": "#FCE883",
          "family": "yellow",
          "familyHex": "#FCE883"
        }],
        material: ['56d427abf86901d007716c76']
      },
      {
        _id: '56d5b86fdef8cc9c10fc716e',
        name: 'Silver Product 9',
        nameAr: 'منتج الفضي التاسع',
        pictureUrls: ['https://arzaq.s3.amazonaws.com/Products/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbWciOiJpbWFnZSIsImlhdCI6MTQ1NDMzNDUwMX0.wRdn5xSRobY78E3eiLGCnq7KpFilL9PjiLpkMvyCtxg.png'],
        price: 120,
        discount: 0,
        seller: '568d27a06b7cf40804147c24',
        quantity: 80,
        description: 'Silver and Crescent Charm adorned with Diamonds',
        descriptionAr: 'منتج فضي مرصع بالاحجار',
        duration: '568e4fd8f5fa62d00204f082',
        eligibility: '568e4fd8f5fa62d00204f083',
        customizable: false,
        user: '568908af9839e95403f943c9',
        status: '569fa63e345dbd9811fe2e6a',
        creationDate: '2016-02-01T13:48:21.106Z',
        lastUpdate: '2016-02-01T13:48:21.106Z',
        reviewDate: '2016-02-01T13:48:58.009Z',
        reviewMsg: '',
        category: '56ae2c54ca6a6ae020d4dbc1',
        countRates: 10,
        quantityRates: 30,
        ratePercentage: 60,
        code: '9',
        colors: [{
          "name": "Yellow",
          "Hex": "#FCE883",
          "family": "yellow",
          "familyHex": "#FCE883"
        }, {
          "name": "Shamrock",
          "Hex": "#45CEA2",
          "family": "Blue",
          "familyHex": "#1F75FE"
        }],
        material: ['56d427abf86901d007716c76']
      }
    );
  });

ProductSales.find({
    _id: {
      $in: ['56af5f80b2b921041256ed09', '56af5ff7b2b921041256ed0b', '56af60afb2b921041256ed0d',
        '56af615bb2b921041256ed0f', '56af61afb2b921041256ed11', '56af61f3b2b921041256ed13',
        '56af6225b2b921041256ed15', '56d5b86fdef8cc9c10fc716c', '56d5b86fdef8cc9c10fc716e'
      ]
    }
  })
  .removeAsync()
  .then(()=> {
    ProductSales.createAsync(
      {
        _id: '56af5f80b2b921041256ed09',
        product: '56af5f80b2b921041256ed09',
        invoice: null,
        invoiceDate: '2016-02-01T13:48:58.009Z',
        quantity: 10,
        price: 100,
        user: '568e4fd8f5fa62d00204f081',
        seller: '568e4fd8f5fa62d00204f081'
      },
      {
        _id: '56af5ff7b2b921041256ed0b',
        product: '56af5ff7b2b921041256ed0b',
        invoice: null,
        invoiceDate: '2016-02-01T13:48:58.009Z',
        quantity: 12,
        price: 100,
        user: '568e4fd8f5fa62d00204f081',
        seller: '568e4fd8f5fa62d00204f081'
      },
      {
        _id: '56af60afb2b921041256ed0d',
        product: '56af60afb2b921041256ed0d',
        invoice: null,
        invoiceDate: '2016-02-01T13:48:58.009Z',
        quantity: 14,
        price: 100,
        user: '568e4fd8f5fa62d00204f081',
        seller: '568e4fd8f5fa62d00204f081'
      },
      {
        _id: '56af615bb2b921041256ed0f',
        product: '56af615bb2b921041256ed0f',
        invoice: null,
        invoiceDate: '2016-02-01T13:48:58.009Z',
        quantity: 5,
        price: 100,
        user: '568e4fd8f5fa62d00204f081',
        seller: '568e4fd8f5fa62d00204f081'
      },
      {
        _id: '56af61afb2b921041256ed11',
        product: '56af61afb2b921041256ed11',
        invoice: null,
        invoiceDate: '2016-02-01T13:48:58.009Z',
        quantity: 7,
        price: 100,
        user: '568e4fd8f5fa62d00204f081',
        seller: '568e4fd8f5fa62d00204f081'
      },
      {
        _id: '56af61f3b2b921041256ed13',
        product: '56af61f3b2b921041256ed13',
        invoice: null,
        invoiceDate: '2016-02-01T13:48:58.009Z',
        quantity: 1,
        price: 100,
        user: '568e4fd8f5fa62d00204f081',
        seller: '568e4fd8f5fa62d00204f081'
      },
      {
        _id: '56af6225b2b921041256ed15',
        product: '56af6225b2b921041256ed15',
        invoice: null,
        invoiceDate: '2016-02-01T13:48:58.009Z',
        quantity: 16,
        price: 100,
        user: '568e4fd8f5fa62d00204f081',
        seller: '568e4fd8f5fa62d00204f081'
      },
      {
        _id: '56d5b86fdef8cc9c10fc716c',
        product: '56d5b86fdef8cc9c10fc716c',
        invoice: null,
        invoiceDate: '2016-02-01T13:48:58.009Z',
        quantity: 100,
        price: 100,
        user: '568e4fd8f5fa62d00204f081',
        seller: '568e4fd8f5fa62d00204f081'
      },
      {
        _id: '56d5b86fdef8cc9c10fc716e',
        product: '56d5b86fdef8cc9c10fc716e',
        invoice: null,
        invoiceDate: '2016-02-01T13:48:58.009Z',
        quantity: 90,
        price: 100,
        user: '568e4fd8f5fa62d00204f081',
        seller: '568e4fd8f5fa62d00204f081'
      });
  });


Comment.find({_id: {$in: ['56d2e2c31a8a3b400c89a623', '56af615bb2b921041256ed0f', '56c60a939c0892e019124e69', '568d27a06b7cf40804147c24', '568d27a06b7cf40804147c25']}}).removeAsync()
  .then(()=> {
    Comment.createAsync({
        _id: '56d2e2c31a8a3b400c89a623',
        product: '56af615bb2b921041256ed0f',
        user: '568e4fd8f5fa62d00204f081',
        comment: 'Comment',
        rate: 3,
        creationDate: '2016-06-06T12:07:02.239Z',
        lastUpdate: '2016-06-06T12:07:02.239Z'
      },
      {
        _id: '56af615bb2b921041256ed0f',
        product: '56af615bb2b921041256ed0f',
        user: '568908af9839e95403f943c9',
        comment: 'Comment 2',
        rate: 2,
        creationDate: '2016-06-07T10:07:02.239Z',
        lastUpdate: '2016-06-07T10:07:02.239Z'
      },
      {
        _id: '56c60a939c0892e019124e69',
        product: '56af60afb2b921041256ed0d',
        user: '568908af9839e95403f943c9',
        comment: 'Comment 1',
        rate: 4,
        creationDate: '2016-03-04T10:07:02.239Z',
        lastUpdate: '2016-03-05T10:07:02.239Z'
      },
      {
        _id: '568d27a06b7cf40804147c24',
        product: '56af5f80b2b921041256ed09',
        user: '568908af9839e95403f943c9',
        comment: 'Comment 5',
        rate: 4,
        creationDate: '2016-06-04T10:07:02.239Z',
        lastUpdate: '2016-06-05T10:07:02.239Z'
      },
      {
        _id: '568d27a06b7cf40804147c25',
        product: '56af61afb2b921041256ed11',
        user: '568908af9839e95403f943c9',
        comment: 'Comment 5',
        rate: 4,
        creationDate: '2016-05-04T10:07:02.239Z',
        lastUpdate: '2016-05-05T10:07:02.239Z'
      });
  });
