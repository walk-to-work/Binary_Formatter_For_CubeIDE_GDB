
function break_line(){
    
    var input_area = document.getElementById("input_area");
    var output_area = document.getElementById("output_area");
    var width_setting= document.getElementById("width_setting");
    var break_line_width;

    const invalid_hex_qualify = document.getElementById("invalid_hex_qualify").checked;

    try{
        break_line_width = parseInt( width_setting.value );
    }
    catch(error){
        console.log(error);
        alert("不正な改行幅です．整数で入力してください．");
        return;
    }

    let splited_elements  = input_area.value.replace(/\r?\n/g, '').split(',');

    for( let i = 0 ; i < splited_elements.length ; i++ ){
        try{
            splited_elements[i] = splited_elements[i].match(/0x../g)[0].replace('"' , '' );
        }catch(err){
            console.log(err)
        }
    }

    if( invalid_hex_qualify ){
        for( let i = 0 ; i < splited_elements.length ; i++ ){
            splited_elements[i] = splited_elements[i].replace('0x', '');
        }
    }



    output_area.style.height = "calc( 1.3em * " + String( splited_elements.length / break_line_width + 1)  + ")";

    for( let i = 0 ; i < splited_elements.length ; i++ ){

        if (i % break_line_width == 0 && i != 0) 
            output_area.value += "\n";

        output_area.value += splited_elements[i] + " ";

    }

    
}