let names = ['q', 's', 'b'];

const vance = {
    greet: function (names) {
        for (let name of names) console.log(`hi ${name}`);
    }
}

vance.greet(names);