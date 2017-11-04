/**
 * @param {assets.Assign} assign
 * @transaction
 */
function assignDoctor(assign) {
  console.log('assign doctor');
  
  var factory = getFactory();
  
  var d = new Date();
  
  var assignment = factory.newResource('assets', 'DoctorAssignment', d.getMilliseconds().toString());
  
   assignment.doctor = assign.doctor;
   assignment.patient = assign.patient;
   assignment.status = 'ACTIVE';
  
    return getAssetRegistry(assignment.getFullyQualifiedType())
        .then(function (registry) {
            return registry.add(assignment);
        });
}


/**
 * @param {assets.Unassign} unassign
 * @transaction
 */
function unAssignDoctor(unassign) {
  console.log('un-assign doctor');
  
  var factory = getFactory();
   
  var assignment = unassign.assignment;

   assignment.status = 'INACTIVE';
  
    return getAssetRegistry(assignment.getFullyQualifiedType())
        .then(function (registry) {
            return registry.update(assignment);
        });
}