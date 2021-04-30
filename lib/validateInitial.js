const validatePreference = (value)=>{
    if (value.length){
        if (value=="b"|value=="s"){
            return true
        }
        return "Enter a valid alphabet, s for small build and b for larger build:\n"
    }
    return "Cannot work with Empty string, Kindly enter something:\n"
}
module.exports=validatePreference