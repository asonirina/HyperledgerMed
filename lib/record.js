
/**
 * @param {assets.CreateRecord} createRecord
 * @transaction
 */
function createRecord(createRecord) {
  console.log('create record');
  
  var factory = getFactory();
  
  var d = new Date();
  var record = factory.newResource('assets', 'Record', d.getMilliseconds().toString());
  
   record.content = createRecord.content;
   record.doctorAssignment = createRecord.doctorAssignment;
   
  
    return getAssetRegistry(record.getFullyQualifiedType())
        .then(function (registry) {
            return registry.add(record);
        });
}