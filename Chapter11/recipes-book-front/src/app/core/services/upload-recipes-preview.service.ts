import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const BASE_PATH = environment.basePath

@Injectable({
  providedIn: 'root'
})
export class UploadRecipesPreviewService {

  constructor(private http: HttpClient) { }
  /**
   * Uploads the file
   * @param code 
   * @param fileToUpload 
   * @returns 
   */
  upload(code: string, fileToUpload?: File): Observable<any> {
    const formData = new FormData()
    formData.append('fileToUpload', fileToUpload as any)
    return this.http.post<any>(
      `${BASE_PATH}/recipes/upload/${code}`,
      formData
    )
  }
}
