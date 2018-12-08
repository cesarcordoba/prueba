

import { Table, Column, Model, HasMany, HasOne, BelongsTo, BelongsToMany, DataType,  ForeignKey} from 'sequelize-typescript';
import { Inversionista } from '../inversionista/modelo';
import { Proyecto } from '../proyecto/modelo';
import { Contratista } from '../contratista/modelo';

@Table({
    timestamps: true,
    tableName: 'usuarios'
})
export class Usuario extends Model<Usuario> {

    @Column({primaryKey: true, autoIncrement:true})
    id: number;



    @Column(DataType.STRING)
    nombre : undefined;



    @Column(DataType.STRING)
    apellido : undefined;



    @Column(DataType.STRING)
    correo : undefined;



    @Column(DataType.STRING)
    password : undefined;



    @Column(DataType.STRING)
    tipo : undefined;


        
        
    @BelongsToMany(()=> Proyecto, () => Inversionista,'IdUsuario', 'IdProyecto')
    Inversionistas : Proyecto[];

            
    @BelongsToMany(()=> Proyecto, () => Contratista,'IdUsuario', 'IdProyecto')
    Contratistas : Proyecto[];

            

    constructor(values?: any, options?: any) {
        super(values, options);
    }
}