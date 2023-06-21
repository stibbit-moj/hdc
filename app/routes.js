//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

//interpreter

router.post('/interpreter-answer', function(request, response) {

  var interpreter = request.session.data['interpreter']
  if (interpreter == "yes"){
      response.redirect("/interpreter-language")
  } else {
      response.redirect("/check-prisoner-answers")
  }
})

//interpreter end

//curfew daily

router.post('/curfew-info-answer', function(request, response) {

  var curfew = request.session.data['curfew-info']
  if (curfew == "yes"){
      response.redirect("/curfew-daily")
  } else {
      response.redirect("/curfew-monday")
  }
})

//curfew daily end


//trail monitoring condition

router.post('/exclusion-monitoring-answer', function(request, response) {

  var exclusionlMonitoring = request.session.data['exclusion-monitoring']
  if (exclusionlMonitoring == "yes"){
      response.redirect("/exclusion-map")
  } else {
      response.redirect("/trail-monitoring-licence-conditions")
  }
})

//trail monitoring condition end


//trail monitoring condition

router.post('/trail-monitoring-answer', function(request, response) {

  var trailMonitoring = request.session.data['trail-monitoring']
  if (trailMonitoring == "yes"){
      response.redirect("/trail-monitoring-end")
  } else {
      response.redirect("/mandatory-attendance")
  }
})

//trail monitoring condition end

//mandatory attendance

router.post('/mandatory-attendance-answer', function(request, response) {

  var mandatoryAttendance = request.session.data['mandatory-attendance']
  if (mandatoryAttendance == "yes"){
      response.redirect("/mandatory-attendance-location")
  } else {
      response.redirect("/alcohol-monitoring")
  }
})

//mandatory attendance end

//alcohol monitoring

router.post('/alcohol-monitoring-answer', function(request, response) {

  var alcoholMonitoring = request.session.data['alcohol-monitoring']
  if (alcoholMonitoring == "yes"){
      response.redirect("/alcohol-monitoring-type")
  } else {
      response.redirect("/equipment-installation-extra-info")
  }
})

//alcohol monitoring end

//alcohol equipment installation routes

router.post('/alcohol-installation-location-answer', function(request, response) {
  var alcoholLocation = request.session.data['alcohol-monitoring-installation-location']
  if (alcoholLocation == "curfew-address"){
      response.redirect("/check-alcohol-answers")
    } else {
      response.redirect("/alcohol-equipment-installation-address")
  }
  
})



//risk indicators 

router.post('/risk-answer', function(request, response) {

  var riskIndicator = request.session.data['risk-indicators']
  if (riskIndicator == "yes"){
      response.redirect("/risk-details")
  } else {
      response.redirect("/check-risk-answers")
  }
})

//risk indicators end