const updatePayment = async (payment, data)=> {
    
    try {
        if(data.link){
            payment.update({ trackId: data.id, trackLink : data.link} )
        }
    } catch (error) {
        throw error
    }
}

module.exports = {
    updatePayment
}