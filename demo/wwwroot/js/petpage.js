$(document).ready(function () {
    // Get the 'type' parameter from the URL
    var urlParams = new URLSearchParams(window.location.search);
    var petType = urlParams.get('type');
   // alert(petType);  // Alert the petType (just for testing)

    // Define banners for each pet type
    var petbanners = {
        dog: "https://i.pinimg.com/736x/39/8c/28/398c2833aad3c95c80ced32b23e17eb8.jpg",
        cat: "https://i.pinimg.com/736x/9d/8e/d2/9d8ed278f3fed613ccd42237b97f4443.jpg",
        bird: "https://i.pinimg.com/originals/a5/3d/85/a53d85d28aa6de8c8080a053b84e8fd5.gif",
        fish: "https://i.pinimg.com/736x/a7/73/01/a7730186ada414b9a69ea1063574feab.jpg",
        all: "https://i.pinimg.com/736x/ac/5a/9b/ac5a9bc43937812e9838da1b52b59521.jpg"
    };

    // Check if petType exists and is in the petbanners object
    if (petType && petbanners[petType]) {
        var imageUrl = petbanners[petType];
        $("#banner").attr('src', imageUrl);
    }


});
$(document).ready(function () {
    var urlParams = new URLSearchParams(window.location.search);
    var petType = urlParams.get('type'); // This will be 'dog', 'cat', 'bird', or 'fish'
    var category = urlParams.get('category'); // This will be 'Food', 'Toy', 'Accessory', etc.

    // Define product data for each pet type
    var petProducts = {
        dog: [
            {
                name: "Dog Food",
                category: "Food",
                type: "Dog",
                price: "$19.99",
                image: "https://i.pinimg.com/736x/c9/1b/b9/c91bb9bcfe29a8e8e1c34af60c3a71d4.jpg"
            },
            {
                name: "Dog Toy",
                category: "Toy",
                type: "Dog",
                price: "$9.99",
                image: "https://i.pinimg.com/736x/c9/26/d7/c926d7091b9d22da3c86ff8d5f5b2fc6.jpg"
            },
            {
                name: "Dog Leash",
                category: "Accessory",
                type: "Dog",
                price: "$15.99",
                image: "https://i.pinimg.com/736x/13/00/10/13001027c01e0fbbe9153a6bb8008ad5.jpg"
            },
            {
                name: "Dog Bed",
                category: "Furniture",
                type: "Dog",
                price: "$49.99",
                image: "https://i.pinimg.com/736x/f5/03/47/f50347da89268d6541c7043784ee7bfc.jpg"
            },
            {
                name: "Dog Shampoo",
                category: "Grooming",
                type: "Dog",
                price: "$12.99",
                image: "https://i.pinimg.com/736x/04/b7/f1/04b7f1ae649a40e40f18675a78bfc985.jpg"
            }
        ],
        cat: [
            {
                name: "Cat Food",
                category: "Food",
                type: "Cat",
                price: "$14.99",
                image: "https://i.pinimg.com/736x/2d/63/6a/2d636a3cbedfc8d29e3e0661f4972fd7.jpg"
            },
            {
                name: "Cat Toy",
                category: "Toy",
                type: "Cat",
                price: "$7.99",
                image: "https://i.pinimg.com/736x/c2/6e/89/c26e89dbe631d98161b270540f6f20f3.jpg"
            },
            {
                name: "Cat Carrier",
                category: "Accessory",
                type: "Cat",
                price: "$24.99",
                image: "https://i.pinimg.com/736x/04/5a/4a/045a4a169e8b3ab2d83c8543cfac6247.jpg"
            },
            {
                name: "Cat Litter Box",
                category: "Furniture",
                type: "Cat",
                price: "$19.99",
                image: "https://i.pinimg.com/736x/a9/75/4f/a9754fa45e4d58ed45413eacafcaa363.jpg"
            },
            {
                name: "Cat Scratcher",
                category: "Furniture",
                type: "Cat",
                price: "$29.99",
                image: "https://i.pinimg.com/736x/b4/1b/a0/b41ba0d95970a9cc2d2166a243d11090.jpg"
            }
        ],
        bird: [
            {
                name: "Bird Cage",
                category: "Furniture",
                type: "Bird",
                price: "$79.99",
                image: "https://i.pinimg.com/236x/26/14/20/2614207d9e9ffd927a2a4cb79ecfc369.jpg"
            },
            {
                name: "Bird Food",
                category: "Food",
                type: "Bird",
                price: "$12.99",
                image: "https://i.pinimg.com/736x/70/f3/55/70f3553065cd4d1d3d8c6cd9deaab21c.jpg"
            },
            {
                name: "Bird Toy",
                category: "Toy",
                type: "Bird",
                price: "$8.99",
                image: "https://i.pinimg.com/736x/04/47/b2/0447b2274652c4b92f9fdbfd63204635.jpg"
            },
            {
                name: "Bird Perch",
                category: "Furniture",
                type: "Bird",
                price: "$15.99",
                image: "https://i.pinimg.com/736x/21/89/ca/2189cab1cafb74b246adb83d7a2495e1.jpg"
            },
            {
                name: "Bird Bath",
                category: "Accessory",
                type: "Bird",
                price: "$10.99",
                image: "https://i.pinimg.com/736x/2b/ed/5d/2bed5dc7c9634ca5afabc32b68b91e45.jpg"
            }
        ],
        fish: [
            {
                name: "Fish Tank",
                category: "Furniture",
                type: "Fish",
                price: "$99.99",
                image: "https://i.pinimg.com/236x/bf/0d/ce/bf0dce70d7f97979e2e6d8c08b057a41.jpg"
            },
            {
                name: "Fish Food",
                category: "Food",
                type: "Fish",
                price: "$6.99",
                image: "https://i.pinimg.com/736x/0a/6e/c5/0a6ec5288fd98051fe9c9a7c91a69b93.jpg"
            },
            {
                name: "Fish Filter",
                category: "Accessory",
                type: "Fish",
                price: "$29.99",
                image: "https://i.pinimg.com/236x/57/2f/43/572f435f484a26f8806577d4cecbfd35.jpg"
            },
            {
                name: "Fish Tank Decorations",
                category: "Furniture",
                type: "Fish",
                price: "$14.99",
                image: "https://i.pinimg.com/474x/ff/88/b7/ff88b7e96133f7a61cd8c8e4f28bf357.jpg"
            },
            {
                name: "Fish Gravel",
                category: "Accessory",
                type: "Fish",
                price: "$9.99",
                image: "https://i.pinimg.com/736x/94/55/17/945517bc42a1144e0647966e71bfb57c.jpg"
            }
        ]
    };

    // Check if petType and category are provided, and then filter products
    $(document).ready(function () {
        var urlParams = new URLSearchParams(window.location.search);
        var petType = urlParams.get('type'); // This will be 'dog', 'cat', 'bird', 'fish', or 'all'
        var category = urlParams.get('category'); // This will be 'Food', 'Toy', 'Accessory', etc.

        // Define product data for each pet type
        var petProducts = {
            dog: [
                {
                    name: "Dog Food",
                    category: "Food",
                    type: "Dog",
                    price: "$19.99",
                    image: "https://i.pinimg.com/736x/c9/1b/b9/c91bb9bcfe29a8e8e1c34af60c3a71d4.jpg"
                },
                {
                    name: "Dog Toy",
                    category: "Toy",
                    type: "Dog",
                    price: "$9.99",
                    image: "https://i.pinimg.com/736x/c9/26/d7/c926d7091b9d22da3c86ff8d5f5b2fc6.jpg"
                },
                {
                    name: "Dog Leash",
                    category: "Accessory",
                    type: "Dog",
                    price: "$15.99",
                    image: "https://i.pinimg.com/736x/13/00/10/13001027c01e0fbbe9153a6bb8008ad5.jpg"
                },
                {
                    name: "Dog Bed",
                    category: "Furniture",
                    type: "Dog",
                    price: "$49.99",
                    image: "https://i.pinimg.com/736x/f5/03/47/f50347da89268d6541c7043784ee7bfc.jpg"
                },
                {
                    name: "Dog Shampoo",
                    category: "Grooming",
                    type: "Dog",
                    price: "$12.99",
                    image: "https://i.pinimg.com/736x/04/b7/f1/04b7f1ae649a40e40f18675a78bfc985.jpg"
                }
            ],
            cat: [
                {
                    name: "Cat Food",
                    category: "Food",
                    type: "Cat",
                    price: "$14.99",
                    image: "https://i.pinimg.com/736x/2d/63/6a/2d636a3cbedfc8d29e3e0661f4972fd7.jpg"
                },
                {
                    name: "Cat Toy",
                    category: "Toy",
                    type: "Cat",
                    price: "$7.99",
                    image: "https://i.pinimg.com/736x/c2/6e/89/c26e89dbe631d98161b270540f6f20f3.jpg"
                },
                {
                    name: "Cat Carrier",
                    category: "Accessory",
                    type: "Cat",
                    price: "$24.99",
                    image: "https://i.pinimg.com/736x/04/5a/4a/045a4a169e8b3ab2d83c8543cfac6247.jpg"
                },
                {
                    name: "Cat Litter Box",
                    category: "Furniture",
                    type: "Cat",
                    price: "$19.99",
                    image: "https://i.pinimg.com/736x/a9/75/4f/a9754fa45e4d58ed45413eacafcaa363.jpg"
                },
                {
                    name: "Cat Scratcher",
                    category: "Furniture",
                    type: "Cat",
                    price: "$29.99",
                    image: "https://i.pinimg.com/736x/b4/1b/a0/b41ba0d95970a9cc2d2166a243d11090.jpg"
                }
            ],
            bird: [
                {
                    name: "Bird Cage",
                    category: "Furniture",
                    type: "Bird",
                    price: "$79.99",
                    image: "https://i.pinimg.com/236x/26/14/20/2614207d9e9ffd927a2a4cb79ecfc369.jpg"
                },
                {
                    name: "Bird Food",
                    category: "Food",
                    type: "Bird",
                    price: "$12.99",
                    image: "https://i.pinimg.com/736x/70/f3/55/70f3553065cd4d1d3d8c6cd9deaab21c.jpg"
                },
                {
                    name: "Bird Toy",
                    category: "Toy",
                    type: "Bird",
                    price: "$8.99",
                    image: "https://i.pinimg.com/736x/04/47/b2/0447b2274652c4b92f9fdbfd63204635.jpg"
                },
                {
                    name: "Bird Perch",
                    category: "Furniture",
                    type: "Bird",
                    price: "$15.99",
                    image: "https://i.pinimg.com/736x/21/89/ca/2189cab1cafb74b246adb83d7a2495e1.jpg"
                },
                {
                    name: "Bird Bath",
                    category: "Accessory",
                    type: "Bird",
                    price: "$10.99",
                    image: "https://i.pinimg.com/736x/2b/ed/5d/2bed5dc7c9634ca5afabc32b68b91e45.jpg"
                }
            ],
            fish: [
                {
                    name: "Fish Tank",
                    category: "Furniture",
                    type: "Fish",
                    price: "$99.99",
                    image: "https://i.pinimg.com/236x/bf/0d/ce/bf0dce70d7f97979e2e6d8c08b057a41.jpg"
                },
                {
                    name: "Fish Food",
                    category: "Food",
                    type: "Fish",
                    price: "$6.99",
                    image: "https://i.pinimg.com/736x/0a/6e/c5/0a6ec5288fd98051fe9c9a7c91a69b93.jpg"
                },
                {
                    name: "Fish Filter",
                    category: "Accessory",
                    type: "Fish",
                    price: "$29.99",
                    image: "https://i.pinimg.com/236x/57/2f/43/572f435f484a26f8806577d4cecbfd35.jpg"
                },
                {
                    name: "Fish Tank Decorations",
                    category: "Furniture",
                    type: "Fish",
                    price: "$14.99",
                    image: "https://i.pinimg.com/474x/ff/88/b7/ff88b7e96133f7a61cd8c8e4f28bf357.jpg"
                },
                {
                    name: "Fish Gravel",
                    category: "Accessory",
                    type: "Fish",
                    price: "$9.99",
                    image: "https://i.pinimg.com/736x/94/55/17/945517bc42a1144e0647966e71bfb57c.jpg"
                }
            ]
        };

        // Function to display products
        function displayProducts(filteredProducts) {
            var productContainer = $('.productContainer');
            productContainer.empty(); // Clear previous products
            if (filteredProducts.length > 0) {
                filteredProducts.forEach(function (product) {
                    var productHtml = `
                    <div class="col-md-3">
                        <div class="product">
                            <div class="product-image-container">
                                <img src="${product.image}" alt="${product.name}" class="product-image" />
                            </div>
                            <div class="product-details">
                                <h3 class="product-name">${product.name}</h3>
                                <p class="product-category">Category: ${product.category}</p>
                                <p class="product-price">Price: ${product.price}</p>
                                <div class="product-actions">
                                    <button class="add-to-wishlist" onclick="addToWishlist('${product.name}')">Add to Wishlist</button>
                                    <button class="add-to-cart" onclick="addToCart('${product.name}')">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                    productContainer.append(productHtml);
                });
            } else {
                productContainer.text('No products found for this pet type and category.');
            }
        }
        // Check if petType and category are provided
        if (petType && petProducts[petType] || petType === 'all' ) {
            var products = [];
           
            if (petType === 'all') {
                // Combine all pet products if 'all' pet type is selected
                products = Object.values(petProducts).flat();
            } else {
                // Filter products by selected petType and category
                products = petProducts[petType].filter(function (product) {
                    return category ? product.category.toLowerCase() === category.toLowerCase() : true;
                });
            }

            // Initial display of products
            displayProducts(products);

            // Add search functionality
            $('#searchInput').on('input', function () {
                var searchQuery = $(this).val().toLowerCase();
                var filteredProducts = products.filter(function (product) {
                    return product.name.toLowerCase().includes(searchQuery);
                });
                displayProducts(filteredProducts);
            });

        } else {
            $('.productContainer').text('No products found for this pet type.');
        }
    });

});

