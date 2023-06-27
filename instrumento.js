class instrumento {
    do(){}
    re(){}
    mi(){}
    fa(){}
    sol(){}
    la(){}
}

class instrumentoCordas extends instrumento {



    showPosition(rows, names, columns, position){
        console.log(rows)
        console.log(names)
        console.log(columns)
        console.log(position)
 
        var pRow = names.indexOf(position[0]) + 1
        var pColumn = position[1]

        console.log(pRow)
        console.log(pColumn)
        let chord = ""

        for(var i = 0; i <= rows; i++){
            var linha = ""
            if(i != 0){
                linha += `${names[i - 1]} `
            }else{
                linha += `  `
            }
            for(var j = 1; j <= columns; j++){
                if(i == 0){
                    if(j >= 10){
                        linha += `${j-10} `
                    }else{
                        linha += `${j} `
                    }
                }else{
                    if(j == pColumn && i == pRow){
                        linha += `1|`
                    }
                    else{
                        linha += `_|`
                    }
                }
            }

            chord += (linha + `\n`)
        }
        console.log(chord)
    }
}

class ukulele extends instrumentoCordas{
    cordas = {
        qtd: 4,
        names: ["G", "C", "E", "A"]
    }
    casas = 18

    do(){
        const position = ["A", 3]
        console.log(this.showPosition(this.cordas.qtd, this.cordas.names, this.casas, position))
    }
    re(){
        const position = [["G", 2], ["C", 2], ["E", 2], ["A", 0]]
    }
    mi(){
        const position = [["G", 1], ["C", 4], ["E", 0], ["A", 2]]
    }
    fa(){
        const position = [["G", 2], ["C", 0], ["E", 1], ["A", 0]]
    }
    sol(){
        const position = [["G", 0], ["C", 2], ["E", 3], ["A", 2]]
    }
    la(){
        const position = [["G", 2], ["C", 1], ["E", 0], ["A", 0]]
    }
    si(){
        const position = [["G", 4], ["C", 3], ["E", 2], ["A", 2]]
    }
}

u = new ukulele()
u.do()