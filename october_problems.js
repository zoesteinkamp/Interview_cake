// Your company delivers breakfast via autonomous quadcopter drones. And something mysterious has happened.
// Each breakfast delivery is assigned a unique ID, a positive integer. When one of the company's 100
// drones takes off with a delivery, the delivery's ID is added to an array, delivery_id_confirmations.
// When the drone comes back and lands, the ID is again added to the same array.

//After breakfast this morning there were only 99 drones on the tarmac. One of the drones never made it
//back from a delivery. We suspect a secret agent from Amazon placed an order and stole one of our patented drones.
//To track them down, we need to find their delivery ID.

//Given the array of IDs, which contains many duplicate integers and one unique integer, find the unique integer.


//So with this problem its all about run time and using the proper sorting aalgorithm.

var arrayID = [9, 9, 111, 30, 30, 54, 54, 67 ,67 , 57 ,57 ,82 ,82 ,93 ,93 , 2, 2, 3, 3, 4, 4, 5, 5,7, 7]; //number 111 can be our missing drone
var sorted_arr = arrayID.sort(function(a, b){return a-b}); // So we first need to sort out the array
console.log(sorted_arr)
var drone = []; // to figure out which drone amazon has stolen from us!

for (var i = 0; i < arrayID.length - 1; i++) {
    if (sorted_arr[i + 1] != sorted_arr[i]) {
        drone.push(sorted_arr[i]);
    }
}
console.log(drone)




//I'm making a search engine called MillionGazillion™.
//I wrote a crawler that visits web pages, stores a few keywords in a database, and follows links to other web pages.
//I noticed that my crawler was wasting a lot of time visiting the same pages over and over, so I made a hash table
//visited where I'm storing URLs I've already visited. Now the crawler only visits a URL if it hasn't already been visited.
//Thing is, the crawler is running on my old desktop computer in my parents' basement (where I totally don't live anymore),
//and it keeps running out of memory because visited is getting so huge.
//How can I trim down the amount of space taken up by visited?

I honestly did not know any kind of solution for this, other then maybe shortening the urls without http/www/.com..etc.. to
take up less memory. So i went on to the hint.

The first hint did basically what i said, it took off the www and stored it seperatley, like [www.][google.com]. So suprisingly
my first guess was close to the hint.

The actual solution suggested using a trie, which i had never heard of before. But is an interesting but semi-complicated
way of saving that data.
