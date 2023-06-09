const themeModel = require('../models/theme.model');

const themeService = {
   getTheme: async() => {
      return await themeModel.find({});
   },
   postTheme: async(data) => {
      return await themeModel.create({
         themeName: data.themeName,
         theme: {
            url: data.url,
            publicId: data.publicId
         }
      })
   },
   updateTheme: async (id, { theme }) => {
      return await themeModel.findByIdAndUpdate(id, { theme: theme }, {new: true})
  },

   getById: async(id) => {
      return await themeModel.findById(id)
  },
}

module.exports = themeService;