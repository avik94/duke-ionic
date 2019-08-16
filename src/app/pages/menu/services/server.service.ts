import { HttpClient } from '@angular/common/http';

export class ServerService{
    constructor( private http: HttpClient ){}

    getMachineName(companyName){
        return this.http.get('http://vmart.machinesense.com/api/datasources/proxy/1/query?db=telegraf&q=show%20tag%20values%20from%20statsd_vmart_4d%20with%20key%3D%22machine%22%20where%20company%3D%27'+companyName+'%27&epoch=ms').toPromise();
    }
}