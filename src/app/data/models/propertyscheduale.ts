import Property from "./property"

export default interface PropertySceduale{
    id?: number,
    reason?: string,
    isReserved?: string
    isException?: string
    price?: number
    cost?: number
    scheduledDate: Date
    property:Property
    reservation:string
}