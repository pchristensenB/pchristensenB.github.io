
class Folder {
  constructor(id,claimType,creationDate,claimStage,claimPriority,description,name) {
    this.id=id;
    this.claimType=claimType;
    this.creationDate=creationDate;
    this.claimStage=claimStage;
    this.claimPriority=claimPriority;
    this.description=description;
    this.name=name;
    this.policyNumber='FA 2153678';
  };
  getPolicyIcon() {
    console.log(this.claimType);
    if(this.claimType == 'Auto Physical Damage Claim') {
      console.log('return car');
      return 'car_policy.png';
    }
    else if(this.claimType == 'Homeowner Damage Claim'){
      return  'home_policy.png';
    }
    else if(this.claimType == 'Commercial Claim'){
      return 'commercial_policy.png';
    }
    else if(this.claimType == 'Health Insurance Claim'){
      return 'health_policy.png';
    }
  };
}
var myFolder = new Folder('65286002498','Auto Physical Damage Claim','29th Jan','Waiting for review','High','I am writing this to file a report for a car accident in which I was involved on the 5th of February. I was driving my Hyundai i10, 9678 in Bandra when a Honda city, 7845 came in a rush and hit me from behind. My car was totally smashed and damaged','John Mahedy');
function loadClaim() {
  console.log(myFolder.getPolicyIcon());
  $("#folderGroup").append('<div class="wrapper">' +
    '<div class="card radius shadowDepth1">'+
      '<div class="card__content card__padding">' +
        '<div class="card__share">' +
          '<div class="card__social">' +
            '<a class="share-icon facebook" href="/claims/file_view/' + myFolder.id + '"><span class="fa fa-file icon-padding"></span></a>' +
            '<a class="share-icon twitter" href="" data-toggle="modal" data-id="107"><span class="fa fa-phone icon-padding trigger" data-toggle="modal" data-id="' + myFolder.id + '"></span></a>' +
            '<a class="share-icon googleplus" href="/claims/approve/<%= folder.id %>"><span class="fa fa-clipboard-pencil icon-padding"></span></a>' +
            '<a class="share-icon googleplus" href="/claims/approve/<%= folder.id %>"><span class="fa fa-thumbs-o-up icon-padding"></span></a>' +
          '</div>' +
        '<a id="share" class="share-toggle share-icon" href="#"></a>' +
      '</div>' +
      '<div class="card__action">' +
        '<div class="card__author">' +
        '<img style="margin-left:-20px;" src="/boxinsurance/img/' + myFolder.getPolicyIcon() + '">'+
          '<div class="card__author-content lato-font" style="font-size:15px;">' +
          '  Claim Number' +
          '</br>' +
          '  <a style="color:#888888;font-size:14px;padding-left:6px;" class="lato-font">' + myFolder.id +'</a>' +
          '</div>' +
          '<div style="float:right;padding-top:12px;" class="lato-font">' +
          '  Claim Type' +
          '</br>' +
          ' <a style="color:#888888;font-size:14px;padding-left:0px;" class="lato-font">' +myFolder.claimType + '</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<hr>' +
      '<div class="card__meta" style="font-size:15px">' +
      '  <time>' + myFolder.creationDate + '</time>' +
      '</div>' +
      '<article style="font-size:15px;" class="card__article">' +
        '<div id="contentBox">' +
        '    <div style="margin-left:-30%;"class="column leftpush">' +
        '      <i class="fa fa-id-card-o" style="width:0!important;color:#039BE5;padding-top:2px;" aria-hidden="true"><span style="font-size:13px;padding-left:5px;" class="lato-font"> Policy Number: </span><span style="font-size:13px;color:#888888;" class="lato-font">' + myFolder.policyNumber + '</span></i>' +
        '      <i class="fa fa-user-circle" style="width:0!important;color:#039BE5;padding-top:2px;" aria-hidden="true"><span style="font-size:13px; padding-left:8px;" class="lato-font">  Policy Holder: </span><span style="font-size:13px;color:#888888" class="lato-font">' + myFolder.name + '</span></i>'+
        //'    </div>' +
        //'    <div style="padding-left:20%;" class="column">' +
        '        <i class="fa fa-check-circle" style="width:0!important;color:#F96F67;padding-top:2px;" aria-hidden="true"><span style="font-size:13px;padding-left:5px;" class="lato-font"> Status: ' + myFolder.claimStage+'</span></i>'+
      //  '        <div style="margin-right:43%;">'+
        '          <i style="font-size:14px;color:#F96F67;width:10%;" class="fa fa-arrow-up" aria-hidden="true"><span class="lato-font" style="margin-left:10%;">High Priority</span></i>'+
        //'        </div>'+
        '    </div>'+
        '</div>'+
        '<div>' +
        '<ul class="steps" style="margin-bottom:5%;">' +
        '  <li id="step1" class="step step--complete step--active">' +
        '    <span class="step__icon"></span>' +
        '    <span class="step__label">Received Processing</span>' +
        '  </li>' +
        '  <li id="step2" class="step step--incomplete step--inactive">' +
        '    <span class="step__icon"></span>' +
        '    <span class="step__label">Adjustment</span>' +
        '  </li>' +
        '  <li id="step3" class="step step--incomplete step--inactive">' +
        '    <span class="step__icon"></span>' +
        '    <span class="step__label">Complete</span>' +
        '  </li>' +
        '</ul>' +
        '</div>' +
        '<i class="fa fa-info-circle" style="width:0!important;color:#F96F67;padding-top:2px;" aria-hidden="true"><span style="font-size:13px;;margin-left:9px;" class="lato-font"> Incident Summary </span></i>'+
        '<span style="color:#888888;font-size:13px;" class="verela-font">' + myFolder.description + '</span>'+
        '<div style="margin-left:85%;margin-top:1%;">'+
        '<a class="button small" href="/claims/full_report/<%= folder.id %>"><span style="color:white">Full Report</span></a>' +
        '</div>'+
        '</article>'+
      '</div>'+
    '</div>'+
  '</div>');
}
