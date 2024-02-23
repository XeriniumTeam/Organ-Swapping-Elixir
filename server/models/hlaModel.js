const mongoose = require('mongoose');

const geneSchema = mongoose.Schema({
    A : [String],
    B : [String],
    C : [String],
    DRB1 : [String],
    DRB345 : [String],
    DQB1 : [String],
    DQA1 : [String],
    DPB1 : [String],
    DPA1 : [String]
})

const paitentSchema = mongoose.Schema({
    paitent_name : String,
    paitent_genes : geneSchema
})

const hlaSchema = mongoose.Schema({
    recipient_email_id : String,
    recipient : paitentSchema,
    donor: paitentSchema
})

module.exports = mongoose.model('HLA', hlaSchema);