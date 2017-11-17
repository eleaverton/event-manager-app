const cloudinary = require("cloudinary");

module.exports = {
  uploadImage: (req, res) => {
    cloudinary.uploader.upload("my_picture.jpg", function(result) {
      console.log(result);

      /* EXAMPLE RETURN
          { 
            public_id: '4srvcynxrf5j87niqcx6w',
            version: 1340625837,
            signature: '01234567890abcdef01234567890abcdef012345',
            width: 200,
            height: 200,
            format: 'jpg',
            resource_type: 'image',
            url: 'http://res.cloudinary.com/demo/image/upload/v1340625837/4srvcynxrf5j87niqcx6w.jpg',
            secure_url: 'https://res.cloudinary.com/demo/image/upload/v1340625837/4srvcynxrf5j87niqcx6w.jpg' 
        } */
    });
  }
};
