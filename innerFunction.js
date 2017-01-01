function youSayGoodBye() {

    console.log("BYE");

    function youSayHi() {

        console.log("hi");

    }

    return youSayHi;

}

var something = youSayGoodBye();

something();