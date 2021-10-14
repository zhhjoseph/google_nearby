# Autocomplete

This project is created via create-react-app and is deployed at https://google-nearby.netlify.app/

## Starting the app

Create .env file and insert below

```
REACT_APP_GOOGLE_KEY={API KEY HERE}
```

In the project directory, you can run the following to start locally:

`yarn start`

## Notes

#####

In regards to CSS decision of using CSS-in-JS pattern with styled-components.

- Great developer experience - Tracking your components and styles is simple as they live in the same file as your components.
- Can apply complex javascript logic instead of trying to deal with classNames.
- Have mostly just worked with styled-components professionally and do not have time to ramp up to use best practices with other methodologies.

#####

In regards to the google api, best practices seemed to be using their js-api-loader https://cloud.google.com/blog/products/maps-platform/loading-google-maps-platform-javascript-modern-web-applications.

This took the most time besides setting up the initial boilerplate as it was a new api I haven't used before and wanted to make sure I was using the correct way to consume the api.

Only real issue I had not solved is the type def for the refs as it won't accept both HTMLDivElement | google.maps.Map types and unfortunately had to type cast the ref as any in this case.

#####

## Considerations

File Structure -
First thing to consider is seperating concerns and business logic of use case for any files. Before going into the reasoning on structure, as these are always subjective, I believe there is a need to not deeply nest components in the file structure. With components there are larger components seperated into dumb/smart components while smaller components that are commonly used through the app would be placed in ui. There are some folders that are not used that I used when creating the boiler plate such as utils. Depending on the whole scale of the project, the file structure can be very different component wise. Some apps can have as little as 2 routes while some have hundreds and the latter would be a situation where we can move routes into a seperate file structure for better dev experience and readability but in this case I thought it was overkill.

Formik:
Besides being comfortable with it, I used it instead of regular react forms initially in case there was a case of getting values in and out of the form state. It's also simple enough to place a Field input component and have a cleaner form component. Also even though there is no use case in this exercise, formik pairs very well with a versatile library named yup for any type of form validation and it is used in many different industries.

styled-components:
I am familiar with styling with this library and the reasoning behind picking styled components is the styles live with the components that you are using and it makes sense in terms of modular code.
