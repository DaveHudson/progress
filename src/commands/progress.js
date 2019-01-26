module.exports = {
  name: 'progress',
  alias: ['pg'],
  description: 'Shows the year progress',
  run: async toolbox => {
    const { parameters, print, prompt, progress, colors } = toolbox

    // check if name param
    let name = parameters.first

    // if not prompt for a name
    if (!name) {
      const result = await prompt.ask({
        type: 'input',
        name: 'name',
        message: 'What is your name?'
      })
      if (result && result.name) name = result.name
    }

    // if don't provide error out
    if (!name) {
      print.error('No name specified')
      return
    }

    // ext to find year progress
    const yearProgress = `${name}, ${progress.calcProgress()}`

    // Print out
    print.info(yearProgress)
  }
}
