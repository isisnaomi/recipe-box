/*
 * The recipes reducer will always return an array of recipes no matter what
 * You need to return something, so if there are no recipes then just return an empty array
 * */

export default function () {
    return [
        {
            id: 1,
            publisher:"Closet Cooking",
            f2f_url:"http://food2fork.com/view/35171",
            title:"Buffalo Chicken Grilled Cheese Sandwich",
            source_url:"http://www.closetcooking.com/2011/08/buffalo-chicken-grilled-cheese-sandwich.html",
            recipe_id:"35171",
            image_url:"http://static.food2fork.com/Buffalo2BChicken2BGrilled2BCheese2BSandwich2B5002B4983f2702fe4.jpg",
            social_rank:100.0,
            publisher_url:"http://closetcooking.com"
        },
        {
            id: 2,
            publisher:"All Recipes",
            f2f_url:"http://food2fork.com/view/29159",
            title:"Slow Cooker Chicken Tortilla Soup",
            source_url:"http://allrecipes.com/Recipe/Slow-Cooker-Chicken-Tortilla-Soup/Detail.aspx",
            recipe_id:"29159",
            image_url:"http://static.food2fork.com/19321150c4.jpg",
            social_rank:100.0,
            publisher_url:"http://allrecipes.com"
        },
        {
            id: 3,
            publisher:"My Baking Addiction",
            f2f_url:"http://food2fork.com/view/e7fdb2",
            title:"Mac and Cheese with Roasted Chicken, Goat Cheese, and Rosemary",
            source_url :"http://www.mybakingaddiction.com/mac-and-cheese-roasted-chicken-and-goat-cheese/",
            recipe_id:"e7fdb2",
            image_url:"http://static.food2fork.com/MacandCheese1122b.jpg",
            social_rank:100.0,
            publisher_url:"http://www.mybakingaddiction.com"
        }
    ]
}
