import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Pahlawan {
  id?: string;
  nama: string;
  kisah: string;
  imageUrl?: string;
  createdAt: number;
  updatedAt: number;
}
@Injectable({
  providedIn: 'root'
})
export class PahlawanService {
constructor(private firestore: AngularFirestore) {}

  getAllPahlawan(): Observable<Pahlawan[]> {
    return this.firestore.collection<Pahlawan>('pahlawan', ref => 
      ref.orderBy('createdAt', 'asc'))
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Pahlawan;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
  }

  getPahlawanById(id: string): Observable<Pahlawan | undefined> {
    return this.firestore.doc<Pahlawan>(`pahlawan/${id}`).valueChanges();
  }

  addPahlawan(pahlawan: Pahlawan): Promise<any> {
    const timestamp = new Date().getTime();
    return this.firestore.collection('pahlawan').add({
      ...pahlawan,
      createdAt: timestamp,
      updatedAt: timestamp
    });
  }

  updatePahlawan(id: string, pahlawan: Partial<Pahlawan>): Promise<void> {
    return this.firestore.doc(`pahlawan/${id}`).update({
      ...pahlawan,
      updatedAt: new Date().getTime()
    });
  }

  deletePahlawan(id: string): Promise<void> {
    return this.firestore.doc(`pahlawan/${id}`).delete();
  }
}
