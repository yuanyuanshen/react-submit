import Server from './server'

class API extends Server {
  async getExtractList(data = {}){
    try{
      let result = await this.axios('post', '/api/getExtractList', data); 
      return result;
    }catch(err){
      throw err;
    }
  }
  async getCashList(params = {}){
    try{
      let result = await this.axios('get', '/api/getCashList', params); 
      return result;
    }catch(err){
      throw err;
    }
  }
}

export default new API();