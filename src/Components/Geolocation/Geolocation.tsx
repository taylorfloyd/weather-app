/*
The Geolocation interface defines the geolocation object.

This is created from the Open Weather API weather JSON that
is returned when getLatLong() is called from GeolocationService.tsx 
*/
export interface Geolocation {
    zip?: string,
    name?: string,
    lat?: Number,
    lon?: Number,
    country?: string
}