//To verify the schema model and retry to reproduce the error
//but this can also fail when the response is "" with status 200

exports.validateAPIModelResponse = function (res) {
    if (res.status === 200) {
        res.body.should.be.an.Array();
        for (let i = 0; i < res.body.length; i++) {
            Object.keys(res.body[i]).length.should.be.equal(2, "name and bands data is juggled up" + JSON.stringify(res.body[i], null, 2));
            res.body[i].should.have.property('name').which.is.a.String().and.not.be.empty();
            res.body[i].should.have.property('bands').which.is.an.Array();
            for (let j = 0; j < res.body[i].bands.length; j++) {
                Object.keys(res.body[i].bands[j]).length.should.be.equal(2, "name and recordLabel data is missing" + JSON.stringify(res.body[i].bands[j], null, 2));
                res.body[i].bands[j].should.have.property('name').which.is.a.String().and.not.be.empty();
                res.body[i].bands[j].should.have.property('recordLabel').which.is.a.String().and.not.be.empty();
            }
        }
    } else if (res.status === 429) {
        res.body.should.have.property('Too many requests, throttling');
    } else {
        res.status.should.equal(200 || 429, "Status code neither 200 or 429");
    }
}